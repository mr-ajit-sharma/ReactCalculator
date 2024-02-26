import React, { useContext } from 'react'

import { CalcContext } from '../context/calcContext'
const getStyleName = btn => {
    const className = {
        "=": "equals",
        "+": "opt",
        "-": "opt",
        "/": "opt",
        "x": "opt",
        "+-": "opt",
        "%": "opt",
        "c": "cancel",
    }
    return className[btn]
}

export const Button = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext)
    const handleBtnClick = () => {
        // commaclick
        const commaClick = () => {
            setCalc({
                ...calc,
                // num: 85
                num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
            })
        }
        // user click c
        const resetClick = () => {
            setCalc({ num: 0, res: 0, sign: "" })
        }
        // user click operation
        const signClick = () => {
            setCalc({
                sign: value,
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: 0
            })
        }
        // equals click
        const equalsClick = () => {
            if (calc.num && calc.res) {
                const math = (a, b, sign) => {
                    const result = {
                        "+": (a, b) => a + b,
                        "-": (a, b) => a - b,
                        "x": (a, b) => a * b,
                        "/": (a, b) => a / b
                    }
                    return result[sign](a, b)
                }
                setCalc({
                    res: math(calc.res, calc.num, calc.sign),
                    sign: '',
                    num: 0
                })

            }
        }
        // percent click
        const percentClick = () => {
            setCalc({
                num: (calc.num / 100),
                res: (calc.num / 100),
                sign: ""
            })
        }
        // invert click
        const invertClick=()=>{
            setCalc({
                num:calc.num?calc.num*-1:'',
                res:calc.res?calc.res*-1:'',
                sign:""
            })
        }
        const handleClickBtn = () => {
            const numberString = value.toString()
            let numberValue;
            if (numberString === "0" && calc.num === 0) {
                numberValue = "0"
            } else {
                numberValue = Number(calc.num + numberString)
            }
            setCalc({
                ...calc,
                num: numberValue
            })
        }
        const results = {
            ".": commaClick,
            "c": resetClick,
            "-": signClick,
            "/": signClick,
            "x": signClick,
            "+": signClick,
            "=": equalsClick,
            "%": percentClick,
            "+-": invertClick
        }
        if (results[value]) {
            return results[value]()
        } else {
            return handleClickBtn()
        }
    }
    return (
        <div onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</div>
    )
}

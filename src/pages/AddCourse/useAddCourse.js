import React from "react";
import {onChangeText} from "../../utils/function";
import {onChangeFile} from "../../utils/function";

const useAddCourse = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [typeId, setTypeId] = React.useState("")
    const [courseFile, setCourseFile] = React.useState(null)
    const [level, setLevel] = React.useState("");
    const [duration, setDuration] = React.useState("");
    let [isValid, setIsValid] = React.useState(false);

    isValid = (title && description && typeId && courseFile && level && duration)

    const getter = {title, description, typeId, courseFile, level, duration}

    const setter = {
        title: onChangeText(setTitle, setIsValid),
        description: onChangeText(setDescription, setIsValid),
        typeId: onChangeText(setTypeId, setIsValid),
        courseFile: onChangeFile(setCourseFile, setIsValid),
        level: onChangeText(setLevel, setIsValid),
        duration: onChangeText(setDuration, setIsValid)
    }

    return {
        getter, setter, isValid
    }
}

export default useAddCourse
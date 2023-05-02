import React from "react";
import {onChangeText} from "../../utils/function";
import {onChangeFile} from "../../utils/function";

const useAddCourse = () => {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [courseTypeId, setCourseTypeId] = React.useState("")
    const [file, setFile] = React.useState(null)
    const [level, setLevel] = React.useState("");
    const [duration, setDuration] = React.useState("");
    let [isValid, setIsValid] = React.useState(false);

    isValid = (title && description && courseTypeId && file && level && duration)

    const getter = {title, description, courseTypeId, file, level, duration}

    const setter = {
        title: onChangeText(setTitle, setIsValid),
        description: onChangeText(setDescription, setIsValid),
        courseTypeId: onChangeText(setCourseTypeId, setIsValid),
        file: onChangeFile(setFile, setIsValid),
        level: onChangeText(setLevel, setIsValid),
        duration: onChangeText(setDuration, setIsValid)
    }

    return {
        getter, setter, isValid
    }
}

export default useAddCourse
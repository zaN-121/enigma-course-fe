import React from 'react'
import FormInput from "../../components/FormInput";
import useEditCourse from "./useEditCourse";
import {Button, Form} from "react-bootstrap";
import {get, set, useForm} from 'react-hook-form';
import {useLocation, useNavigate} from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import {editCourse} from "../../service/courseService";
import useEdit from "../../hooks/useEdit";

const FORM_LIST = [
    {id: "title", label: "Title", type: "text", placeholder: "Enter course title", validate:  ["title", {required: true}]},
    {id: 'description', label: "Description", type: "textarea", placeholder: "Enter course description" , validate: ["descriptioin", {required: true}]},
    {id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id", validate:  ["typeId", {required: true}] },
    {id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" , validate:  ["courseFile", {required: true}]},
    {id: "level", label: "Level", type: "text", placeholder: "Enter course level", validate:  ["level", {required: true}]},
    {id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" , validate: ["duration", {required: true}]},

]

const EditCourse = () => {
    const {getter, setter, isValid} = useEditCourse()
    const {onEdit, loading} = useEdit(editCourse, {
        onError: () => {},
        onSuccess: () => {}
    })
    const {register, handleSubmit, watch, formState: {error}} = useForm();
    const navigate = useNavigate()
    const location = useLocation();
    const onSubmit = (d, navigate, id)  => {
        // let arr = [...data];
        // console.log(arr)
        //
        // for (let i =0; i< arr.length; i++) {
        //     if (i == key ) {
        //         console.log(i)
        //         console.log(key)
        //         arr[i].title = getter.title
        //         arr[i].typeId = getter.typeId
        //         arr[i].description = getter.description
        //         arr[i].courseFile = getter.courseFile
        //         arr[i].level = getter.level
        //         arr[i].duration = getter.duration
        //     }
        // }
        console.log(id)
        onEdit(d, id);
        navigate('/course-list')
    }

    return (
        <>
            <h1>Edit Course Page</h1>
            <Form  id="form1">
                {FORM_LIST.map((form) => (
                    <FormInput
                        label={form.label}
                        type={form.type}
                        placeholder={form.placeholder}
                        value={getter[form.id]}
                        onChange={setter[form.id]}
                    />
                ))}
                
                <Button variant="success" disabled={!isValid} onClick={() => onSubmit(getter, navigate, location.state.id)}>Submit</Button>
                <Button variant="secondary" onClick={() => navigate("/course-list")}>Cancel</Button>
            </Form>
        </>
    )
}

export default EditCourse;
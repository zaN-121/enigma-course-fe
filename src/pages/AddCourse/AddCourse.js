import React from 'react'
import FormInput from "../../components/FormInput";
import useAddCourse from "./useAddCourse";
import {Button, Form} from "react-bootstrap";
import {set, useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import {addCourse} from "../../service/courseService";

const FORM_LIST = [
    {id: "title", label: "Title", type: "text", placeholder: "Enter course title", validate:  ["title", {required: true}]},
    {id: 'description', label: "Description", type: "textarea", placeholder: "Enter course description" , validate: ["descriptioin", {required: true}]},
    {id: "courseTypeId", label: "Type Id", type: "text", placeholder: "Enter course type id", validate:  ["typeId", {required: true}] },
    {id: "file", label: "Course Material", type: "file", placeholder: "Choose course material" , validate:  ["courseFile", {required: true}]},
    {id: "level", label: "Level", type: "text", placeholder: "Enter course level", validate:  ["level", {required: true}]},
    {id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" , validate: ["duration", {required: true}]},

]

const AddCourse = () => {
    const {getter, setter, isValid} = useAddCourse()
    const {onMutation, reload, data: courses} = useMutation(addCourse, {
        onError : () => {},
        onSuccess : () => {}
    })
    const {register, handleSubmit, watch, formState: {error}} = useForm();
    const navigate = useNavigate()

    const onSubmit = ()  => {
        onMutation(getter)
        navigate('/course-list')
    }

    return (
        <>
            <h1>Add Course Page</h1>
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
                
                <Button variant="success" disabled={!isValid} onClick={() => onSubmit()}>Submit</Button>
                <Button variant="secondary" onClick={() => navigate("/course-list")}>Cancel</Button>
            </Form>
        </>
    )
}

export default AddCourse;
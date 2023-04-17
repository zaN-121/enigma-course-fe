import React from 'react'
import FormInput from "../../components/FormInput";
import useAddCourse from "./useAddCourse";
import {Button, Form} from "react-bootstrap";

const FORM_LIST = [
    {id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    {id: 'description', label: "Description", type: "textarea", placeholder: "Enter course description" },
    {id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
    {id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    {id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    {id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" },

]

const AddCourse = () => {
    const {getter, setter} = useAddCourse()

    return (
        <>
            <h1>Add Course Page</h1>
            <Form>
                {FORM_LIST.map((form) => (
                    <FormInput
                        label={form.label}
                        type={form.type}
                        placeholder={form.placeholder}
                        value={getter[form.id]}
                        onChange={setter[form.id]}
                    />
                ))}
                <Button variant="success">Submit</Button>
                <Button variant="secondary">Cancel</Button>
            </Form>
        </>
    )
}

export default AddCourse;
import restApi from "../config/restApi";

export const getCourses = (params) => {
    return restApi.get("/courses")
}

export const addCourse = (payload) => {
    return restApi.post('/courses', payload, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const editCourse = (payload, id) => {
    return restApi.patch(`/courses/${id}`, payload)
}

export const deleteCourse = (id) => {
    return restApi.delete(`/courses/${id}`)
}

export const getCourseType = (type) => {
    return restApi.get(`/type?name=${type}`)
}

export const downloadCourseFile = async (filename) => {
    try {
        const result = restApi.get("/course-files", {
            responseType: "blob",
            params: {
                filename
            }
        })

        const url = window.URL.createObjectURL(new Blob[result.data])
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', filename)
        link.click()
    } catch (e) {
        console.error(e)
    }
}

import { useState } from "react";

// عرفتها جينريك تي لحتى تكون عامة لاي نوع داتا والفرق بينها وبين الاني
// T: بيضمن التحقق من الأنواع وقت الكتابة ويحسن الأمان.
// any: بيسمح بأي نوع بدون تحقق، وهاد بيزيد فرص الأخطاء.


const useAddForm = <T>(initialState: T, validate: (data: T) => string[]) => {
    const [state, setState] = useState<T>(initialState);
    const [errorsList, setErrorsList] = useState<string[]>([]);

    const handleChange = (field: keyof T, value: any) => {
        setState({ ...state, [field]: value });
    };

    const handleSubmit = (onSubmit: (data: T) => void) => {
        const errors = validate(state);
        if (errors.length > 0) {
            setErrorsList(errors);
        } else {
            setErrorsList([]);
            onSubmit(state);
            handleClear();
        }
    };

    const handleClear = () => {
        setState(initialState);
    };

    const handleCoursesChange = (newCoursesList: string[]) => {
        setState({ ...state, coursesList: newCoursesList });
    };

    return {
        state,
        errorsList,
        handleChange,
        handleSubmit,
        handleClear,
        handleCoursesChange,
    };
};

export default useAddForm;
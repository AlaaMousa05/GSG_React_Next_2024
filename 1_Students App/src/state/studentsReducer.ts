import { IStudent } from "../types";

interface IState {
    studentsList: IStudent[];
    totalAbsents: number;
}

type Action =
    | { type: 'INIT_STUDENTS'; payload: IStudent[] }
    | { type: 'ADD_STUDENT'; payload: IStudent }
    | { type: 'REMOVE_FIRST'; }
    | { type: 'CHANGE_ABSENT'; payload: { id: string, change: number } };

const initialState: IState = {
    studentsList: [],
    totalAbsents: 0
};

const reducer = (state: IState, action: Action): IState => {
    switch (action.type) {
        case 'INIT_STUDENTS': {
            const stdList = action.payload;
            const totalAbs = stdList.reduce((prev, cur) => prev + cur.absents, 0);
            return { ...state, studentsList: stdList, totalAbsents: totalAbs };
        }
        case 'ADD_STUDENT': {
            const newStudent = action.payload;
            newStudent.id = Date.now().toString();
            return {
                ...state,
                studentsList: [newStudent, ...state.studentsList],
                totalAbsents: state.totalAbsents + newStudent.absents
            };
        }
        case 'REMOVE_FIRST': {
            if (state.studentsList.length === 0) return state;
            const removedStudent = state.studentsList[0];
            return {
                ...state,
                studentsList: state.studentsList.slice(1),
                totalAbsents: state.totalAbsents - (removedStudent?.absents || 0)
            };
        }
        case 'CHANGE_ABSENT': {
            const { id, change } = action.payload;
            return {
                ...state,
                studentsList: state.studentsList.map(student =>
                    student.id === id
                        ? { ...student, absents: student.absents + change }
                        : student
                ),
                totalAbsents: state.totalAbsents + change
            };
        }
        default:
            return state;
    }
};

export { initialState, reducer };

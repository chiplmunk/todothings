import React from 'react';
import Todo from "@/components/Todo";


const create = () => {
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <div className={`flex items-center justify-center min-h-screen`}>
                <Todo/>
            </div>
            <div>
                <p className={`font-medium text-sm flex items-center mb-20 text-red-700`}>
                    This is the basic task creation form.
                    I will have to convert this into a modal based setup after
                    the project has been completed.
                </p>
            </div>
        </div>
    );
};

export default create;
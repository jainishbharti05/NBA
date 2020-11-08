import React from 'react';
import styles from './formFields.module.css'

const FormFields = ({
    formdata,
    change,
    id
}) => {


    const showError = () => {
        let errorMessage = null;
        
        if(formdata.validation && !formdata.valid)
            errorMessage = (
            <div className={styles.labelError}>
                {formdata.validationMessage}
            </div>
            )
        return errorMessage
    }


    const renderTemplate = () => {
        let formTemplate = null;

        switch (formdata.element) {
            case ('input'):
                formTemplate = (
                    <div>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event)=> change({event,id, blur: true})}
                            onChange={(event)=> change({event,id, blur: false})}
                        />
                        {showError()}
                    </div>
                )
                break;

            case ('select'):
                formTemplate = (
                    <div>
                        <select
                            name={formdata.config.name}
                            value={formdata.value}
                            onBlur={(event)=> change({event,id, blur: true})}
                            onChange={(event)=> change({event,id, blur: false})}
                        >
                            { formdata.config.options.map((item,i) => (
                                <option key={i} value={item.id}>{item.name}</option>
                            ))}
                        </select>
                        {showError()}
                    </div>
                )
                break;
        
            default:
                formTemplate = null
                break;
        }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormFields;
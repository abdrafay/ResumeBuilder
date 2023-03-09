import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const ExperienceFormFields = ({handleExperience,count}) => {
    const [expFields, setExpFields] = useState({
        designation: '',
        company: '',
        timeSpan: ''
    });
    useEffect(() => {
        if(expFields) {
            handleExperience(expFields);
        }
    },[expFields])
    return (
    <div>
        <h4>Skill {count}</h4>
        <TextField value={expFields.designation} onChange={(e) => setExpFields({...expFields, designation: e.target.value})} label="Fist Name" variant="standard" />
        <TextField value={expFields.company} onChange={(e) => setExpFields({...expFields, company: e.target.value})} label="Last Name" variant="standard" />
        <TextField value={expFields.timeSpan} onChange={(e) => setExpFields({...expFields, timeSpan: e.target.value})} label="Image URL" variant="standard" />
    </div>
  )
}

export default ExperienceFormFields

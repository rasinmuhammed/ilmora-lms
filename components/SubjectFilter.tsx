"use client"
import { useState } from 'react'
import { Select, SelectTrigger, SelectItem, SelectValue, SelectContent } from './ui/select'
import { subjects } from '@/constants'


const SubjectFilter = () => {

    const [subject, setSubject] = useState('')

  return (
    <Select onValueChange={setSubject} value={subject}>
        <SelectTrigger className='input capitalize'>
            <SelectValue placeholder="Subject" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            {subjects.map((subject) => (
                <SelectItem key={subject} value={subject} className='capitalize'>
                    {subject}
                </SelectItem>
            ))}
        </SelectContent>

    </Select>
    
  )
}

export default SubjectFilter
import React from 'react'
import Question from './Question'

export default function Faq(){
    return (
        <div className='mt-[155px]'>
            <div className="font-bold bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 ... inline-block ... text-transparent ... bg-clip-text text-5xl">FAQ</div>
            <div className='flex flex-col'>
            <Question ques={"Can education flashcards be used for all age groups?"} info={"Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners. "}/>
            <Question ques={"How do education flashcards work?"} info={"Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition."}/>
            <Question ques={"Can education flashcards be used for test preparation?"} info={"Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams."}/>
            </div>
        </div>
    )
}
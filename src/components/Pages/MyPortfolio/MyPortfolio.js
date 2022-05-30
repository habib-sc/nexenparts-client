import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner/Spinner';

const MyPortfolio = () => {

    const { data: skills, isLoading } = useQuery('skills', () => fetch('https://mighty-chamber-14802.herokuapp.com/skills').then(res => res.json()) );
    const { data: tools, isLoading: loading2 } = useQuery('tools', () => fetch('https://mighty-chamber-14802.herokuapp.com/tools').then(res => res.json()) );
    const { data: projects, isLoading: loading3 } = useQuery('projects', () => fetch('https://mighty-chamber-14802.herokuapp.com/projects').then(res => res.json()) );

    if(isLoading || loading2 || loading3) {
        return <Spinner></Spinner>
    }

    return (
        <div className='container mx-auto px-4'>
            <div className='mt-32 border p-5 rounded-lg'>

                <div>
                    <div className='flex flex-wrap justify-between gap-4'>
                        <div>
                            <h1 className='text-2xl lg:text-4xl font-bold'>Md. Habibur Rahman</h1>
                            <h3 className='text-xl lg:text-2xl font-semibold'>Web Developer</h3>
                            <p className='text-lg mt-1'><span className='font-semibold'>Education:</span> Diploma In Engineering (Computer Technology)</p>
                        </div>
                        <div>
                            <p className='text-lg'><span className='font-semibold'>Email:</span> habibur.rahman.cs7@gmail.com</p>
                            <p className='text-lg'><span className='font-semibold'>Phone:</span> +8801961584280</p>
                            <p className='text-lg'><span className='font-semibold'>Whatsapp:</span> +8801961584280</p>
                            <p className='text-lg'><span className='font-semibold'>Github:</span> <a className='text-blue-600' target='_blank' href="https://github.com/habib-sc" rel="noreferrer">Click here</a></p>
                            <p className='text-lg'><span className='font-semibold'>Linkedin:</span> <a className='text-blue-600' target='_blank' href="https://www.linkedin.com/in/habib-cs7/" rel="noreferrer">Click here</a></p>
                        </div>       
                    </div>
                </div>

                <div className='mt-10'>
                    <h2 className='text-3xl font-semibold mb-5'>Skills</h2>    

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                        {
                            skills.map(skill => <div key={skill._id} className='shadow-lg border rounded-lg p-3 flex gap-4 items-center'>
                                <div className='w-24 p-3 border rounded-lg'>
                                    <img src={skill.img} className='w-full' alt="" />
                                </div>
                                <div>
                                    <p className='text-xl md:text-2xl mb-1'>{skill.skill}</p>
                                    <p className='mb-2'><span className={`px-1 pb-1 rounded ${skill.level === 'Comfortable' ? 'bg-green-100 text-green-600' : 'bg-sky-100 text-sky-600'}`}>{skill.level}</span></p>
                                </div>
                        </div>)

                        }
                    </div>

                </div>


                <div className='mt-10'>
                    <h2 className='text-3xl font-semibold mb-5'>Tools I Use</h2>    

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                        {
                            tools.map(tool => <div key={tool._id} className='border shadow-lg rounded-lg p-3 flex gap-4 items-center'>
                                <div className='w-24 p-3 border rounded-lg'>
                                    <img src={tool.img} className='w-full' alt="" />
                                </div>
                                <div>
                                    <p className='text-xl md:text-2xl mb-1'>{tool.tool}</p>
                                </div>
                        </div>)

                        }
                    </div>

                </div>


                <div className='mt-10'>
                    <h2 className='text-3xl font-semibold mb-5'>Projects</h2>    

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            projects.map(project => <div key={project._id} className='border shadow-lg rounded-lg p-3'>
                                <div className='p-3 border rounded-lg'>
                                    <img src={project.img} className='w-full' alt="" />
                                </div>
                                <div>
                                    <h2 className='text-xl font-semibold mt-2'>{project.projectName}</h2>
                                    <p className='font-semibold text-blue-500'><a href={project.liveLink} target='_blank' rel="noreferrer">Live Link</a></p>
                                    <p className='mb-1 mt-2'>{project.description}</p>
                                </div>
                        </div>)

                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;
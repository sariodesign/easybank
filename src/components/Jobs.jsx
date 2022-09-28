import styled from 'styled-components';
import { useState } from 'react';

const jobs = [
    {
        title: 'Decision analyst',
        category: 'analytics',
        place: 'Chennai, India',
        date: '03 Aug'
    },
    {
        title: 'Business manager prime Asia',
        category: 'business management',
        place: 'Hong Kong, China',
        date: '17 Aug'
    },
    {
        title: 'Client service advisor',
        category: 'business management',
        place: 'London, United Kingdom',
        date: '28 Aug'
    },
    {
        title: 'Training manager',
        category: 'hr',
        place: 'Pune, India',
        date: '02 Set'
    },
    {
        title: 'Candidate aquisition manager',
        category: 'hr',
        place: 'Singapore, Singapore',
        date: '02 Set'
    },
    {
        title: 'UI designer',
        category: 'design',
        place: 'Manchester, United Kingdom',
        date: '09 Set'
    },
    {
        title: 'UX Designer',
        category: 'design',
        place: 'Manchester, United Kingdom',
        date: '09 Set'
    },
    {
        title: 'Frontend developer',
        category: 'technology',
        place: 'London, United Kingdom',
        date: '18 Set'
    },
    {
        title: 'Backend developer',
        category: 'technology',
        place: 'London, United Kingdom',
        date: '19 Set'
    }
]

const JobsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
const JobsFilter = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    padding-top: 54px;

    @media (min-width: 1280px) {
        justify-content: flex-end;
        padding-top: 72px;
    }
`

const JobsFilterLabel = styled.h4`
    color: var(--dark-blue);
    margin: 0 8px 0 0;
`

const JobsFilterItem = styled.select`
    border: 1px solid var(--dark-blue);
    box-sizing: border-box;
    color: var(--dark-blue);
    height: 32px;
    padding: 4px;
    text-transform: capitalize;
`

const JobItem = styled.li`
    align-items: center;
    border-bottom: 1px solid var(--dark-blue);
    color: var(--dark-blue);
    column-gap: 12px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 8px;
    padding-bottom: 16px;
`

const JobTitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
    flex-grow: 1;
    margin: 0;

    @media (max-width: 1279px) {
        flex: 1 0 auto;
        margin-bottom: 8px;
        width: 100%;
    }
`

const JobCategory = styled.span`
    background-color: var(--dark-blue);
    color: var(--lime-green);
    font-size: 10px;
    font-weight: 700;
    line-height: 16px;
    padding: 2px 4px;
    text-transform: capitalize;

    @media (min-width: 1280px) {
        font-size: 12px
    }
`

const JobPlace = styled.span`
    flex: 1;
    font-size: 10px;
    font-style: italic;
    line-height: 1;

    @media (min-width: 1280px) {
        font-size: 12px
    }
`

const JobDate = styled.span`
    font-size: 10px;
    font-weight: 700;
    margin-left: auto;

    @media (min-width: 1280px) {
        font-size: 12px
    }
`

function Jobs() {
    let jobsContent
    const [filterCategory, setFilterCategory] = useState('all')

    const jobsFiltered = (filterArg) => {
        if(filterArg != 'all') {
            jobsContent = jobs.filter(job => job.category === filterArg).map((item, index) => {
                return (
                    <JobItem key={index}>
                        <JobTitle>{item.title}</JobTitle>
                        <JobCategory>{item.category}</JobCategory>
                        <JobPlace>{item.place}</JobPlace>
                        <JobDate>{item.date}</JobDate>
                    </JobItem>
                )
            })
        }  else {
            jobsContent = jobs.map((job, index) => {
                return (
                    <JobItem key={index}>
                        <JobTitle>{job.title}</JobTitle>
                        <JobCategory>{job.category}</JobCategory>
                        <JobPlace>{job.place}</JobPlace>
                        <JobDate>{job.date}</JobDate>
                    </JobItem>
                )
            })
        }
    }

    jobsFiltered(filterCategory)

    const handlerFilterCategory = (e) => {
        setFilterCategory(e.target.value)
    }

    let categories = [];
    jobs.forEach(item => {
        let cat = item.category
        if(!categories.includes(cat)){
            categories.push(cat)
        }
    })

    return (
        <JobsList>
            <JobsFilter>
                <JobsFilterLabel>Filter by:</JobsFilterLabel>
                <JobsFilterItem onChange={handlerFilterCategory} defaultValue="all">
                    <option value="all">Choose category</option>
                    {   categories &&
                        categories.map((item, index) => <option value={item} key={index}>{item}</option> )
                    }   
                </JobsFilterItem>
            </JobsFilter>
            { jobsContent }    
        </JobsList>
    )
}

export default Jobs
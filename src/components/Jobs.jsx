import styled from 'styled-components';

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
        category: 'Design',
        place: 'Manchester, United Kingdom',
        date: '09 Set'
    },
    {
        title: 'UX Designer',
        category: 'Design',
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

const JobItem = styled.li`
    align-items: center;
    border-bottom: 1px solid var(--dark-blue);
    color: var(--dark-blue);
    column-gap: 12px;
    display: flex;
    margin: 0 0 8px;
    padding: 8px 0 16px;
`

const JobTitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
    flex-grow: 1;
    margin: 0;
`

const JobCategory = styled.span`
    background-color: var(--dark-blue);
    color: var(--lime-green);
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    padding: 4px;
    text-transform: capitalize;
`

const JobPlace = styled.span`
    font-size: 12px;
    font-style: italic;
    line-height: 1;
`

const JobDate = styled.span`
    font-size: 14px;
    font-weight: 700;
`



function Jobs() {
    return (
        <JobsList>
            {
                jobs.map((job, index) => <JobItem>
                    <JobTitle>{job.title}</JobTitle>
                    <JobCategory>{job.category}</JobCategory>
                    <JobPlace>{job.place}</JobPlace>
                    <JobDate>{job.date}</JobDate>
                </JobItem>)
            }    
        </JobsList>
    )
}

export default Jobs
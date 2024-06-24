function MeetTheTeam() {
    const team = [
        {
            name: 'Ash',
            job: 'Trainer',
            img: 'https://io-academy.uk/wp-content/uploads/2020/10/DSC_2808-01-520x670.jpeg'
        },
        {
            name: 'Mike',
            job: 'Mike',
            img: 'https://io-academy.uk/wp-content/uploads/2020/10/Mike4bw-520x670.jpg'
        }
    ]


    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-20 mt-10">
            {team.map(member => (
                <div key={member.name}>
                    <img src={member.img} />
                    <h3 className="text-3xl">{member.name}</h3>
                    <p>{member.job}</p>
                </div>
            ))}
        </section>
    )
}

export default MeetTheTeam
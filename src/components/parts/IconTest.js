import projectList from "../../data/projectList";

function IconTest() {

    const codingLangs = []

    for(let i = 0; i < projectList.length; i++) {
        codingLangs[i] = projectList[i].lang.map(item => {
            return(
                <div>
                    <img key={item.key} src={item.src} alt={item.alt}/>
                </div>
            )
        })
    }

    console.log(codingLangs)

    const codingLang = codingLangs.map(item => {
        return (
            <img key={item.key} src={item.src} alt={item.alt}/>
        )
    })

    console.log(codingLang)

    return(
        <div>
            {codingLangs}
        </div>
    )
}

export default IconTest

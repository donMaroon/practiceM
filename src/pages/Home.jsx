import useGetname from "../components/UseGetname"

const Home = () => {

  const names = useGetname()

  return (
    <div className='home'>
        <h2>Welcome</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non 
             odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam 
             quaerat ad! Fugit velit beatae laudantium.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Necessitatibus veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non 
             odit saepe facere voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam 
             quaerat ad! Fugit velit beatae laudantium.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam 
            ducimus eligendi nihil, cumque ab eveniet modi architecto quidem, non odit saepe facere 
            voluptas esse mollitia illo fuga exercitationem id dicta iusto eaque numquam quaerat ad! 
            Fugit velit beatae laudantium.
        </p>
    </div>
  )
}

export default Home

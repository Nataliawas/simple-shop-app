import Link from 'next/Link'

const Home = () => {
    return (
        <div>
            <h1>Hello from home!</h1>
            <Link href = "/about">About</Link>
        </div>
    )
}

export default Home
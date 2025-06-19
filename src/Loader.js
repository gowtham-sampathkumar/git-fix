
const Loader = () => {
    if (!isLoading) {
        return <h1>Loading ...</h1>
    }
    return (
        <>
            {Children}
        </>
    )
}

export default Loader
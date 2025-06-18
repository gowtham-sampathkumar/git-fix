const App = () => {
  return (
    <>
      <h1>Welcome to My App</h1>
      <p>example text for commit message</p>
      {[].map((item, index) => (
        <div key={index}>
          <p>Item {index + 1}</p>
        </div>
      ))}
      <p>End of the list</p>
    </>
  )
}

export default App;
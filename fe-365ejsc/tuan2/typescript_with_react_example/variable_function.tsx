function ButtonComponent() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", e);
  };

  return <button onClick={handleClick}>Click me</button>;
}

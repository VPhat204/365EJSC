type GreetingProps = { name: string };

function Greeting({ name }: GreetingProps) {
  return <p>Hello, <strong>{name}</strong> 👋</p>;
}
export default Greeting


export default function Author({name, imageURL}) {
  return (
    <div className="author">
      <h2>{name}</h2>
      <img src={imageURL} alt={name} width={200}/>
    </div>
  )
}
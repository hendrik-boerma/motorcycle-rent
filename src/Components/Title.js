import './Title.css';

function Title({ title, description }) {
  return (
    <section className='titlesection'>
       <h1>{title}</h1>
       {description && <p>{description}</p>}
    </section>
  );
}

export default Title;
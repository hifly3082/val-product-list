import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Oops!</h1>
      <p style={{ paddingBlock: '2rem' }}>
        Извините, произошла непредвиденная ошибка.
      </p>
      <Link to='home'>
        <button>Вернуться на главную страницу</button>
      </Link>
    </div>
  )
}

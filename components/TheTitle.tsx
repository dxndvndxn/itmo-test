type Props = {
    title: string,
}

export default function TheTitle ({ title } :Props) {
    return (
        <h1 className='title'>
            { title }
        </h1>
    )
}

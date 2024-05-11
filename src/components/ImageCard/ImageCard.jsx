
export default function ImageCard({ item: {
    alt_description,
    urls: { small },
} }) {
    return (
        <div>
            <img src={small} alt={alt_description} width='300' height='230'/>
        </div>
    )
}
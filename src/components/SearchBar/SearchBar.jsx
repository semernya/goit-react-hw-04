import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.error('Please enter your search query!');

export default function SearchBar({ value, onInput }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        event.target.reset();
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input type="text" autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" value={value} onChange={event => onInput(event.target.value)} />
                <button type="submit" onClick={notify}>Search</button>
                {value.length == 0 && < Toaster />}
            </form>
        </header>
    )
}
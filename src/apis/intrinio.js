import axios from 'axios';

export default axios.create({
	baseURL: 'https://api-v2.intrinio.com/',
	headers: {
		Authorization: 'OjZiMzEzNTJlYjk4YjA4OGZlNTQ4MThiZTY5NGZmYmU5'
	}
});
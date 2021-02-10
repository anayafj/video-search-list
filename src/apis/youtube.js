import axios from 'axios';

const KEY = 'AIzaSyBN0rfKZC2DWwhO5LJ6_qEz4u5AsC-Ij6s';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});

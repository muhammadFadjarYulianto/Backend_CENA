document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');

    // Gantilah URL ini dengan URL API ngrok Anda
    const apiUrl = 'http://localhost:3000/api/products';

    console.log('Fetching data from API:', apiUrl);

    fetch(apiUrl)
        .then(response => {
            console.log('Response from API:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();  // Pastikan ini menggunakan response.json()
        })
        .then(data => {
            console.log('Data received:', data);
            const books = data.data;  // Akses array buku di dalam properti 'data'
            console.log('Books:', books);

            books.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.classList.add('book');

                bookElement.innerHTML = `
                    <img src="${book.cover}" alt="${book.judul_buku}">
                    <h2>${book.judul_buku}</h2>
                    <h3>${book.nama_penulis}</h3>
                    <p>${book.deskripsi}</p>
                    <p class="price">Price: Rp.${book.harga}</p>
                `;

                bookList.appendChild(bookElement);
            });
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
        });
});
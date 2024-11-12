// pages/index.js
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/get-images');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Image Gallery</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '16px',
        }}
      >
        {images.map((image) => (
          <div key={image.key} className="image-container" style={{ textAlign: 'center' }}>
            <img
              src={image.url}
              alt={image.key}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <a href={image.url} download target="_blank" rel="noopener noreferrer">
              <button className="download-button">Download</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

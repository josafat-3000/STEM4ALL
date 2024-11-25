import React from 'react';

function Admin() {
  const handleUpload = (e) => {
    e.preventDefault();
    // Lógica para cargar videos
  };

  return (
    <div>
      <h2>Subir Contenido</h2>
      <form onSubmit={handleUpload}>
        <input type="text" placeholder="Título del video" />
        <input type="file" accept="video/*" />
        <button type="submit">Subir Video</button>
      </form>
    </div>
  );
}

export default Admin;

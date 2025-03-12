'use client'

export default function CV() {
  return (
    <div style={{
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)', 
      borderRadius: '10px', 
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
      maxWidth: '900px', 
      margin: '0 auto'
    }}>
      <h1 style={{
        textAlign: 'center', 
        color: '#2c3e50', 
        fontSize: '36px',
        marginBottom: '20px'
      }}>
        Curriculum Vitae
      </h1>

      <div style={{
        marginBottom: '30px', 
        textAlign: 'center'
      }}>
        <img 
          src="/rendi.jpeg" 
          alt="Rendi Maryandi" 
          style={{
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            border: '4px solid #fff', 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px'
          }} 
        />
        <p style={{ fontSize: '18px', color: '#34495e' }}>Rendi Maryandi</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#2980b9' }}>Personal Information</h2>
        <p><strong>Name:</strong> Rendi Maryandi</p>
        <p><strong>NIM:</strong> 232302007</p>
        <p><strong>Address:</strong> Sumedang</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#2980b9' }}>Hobbies</h2>
        <ul style={{ color: '#34495e' }}>
          <li>Bermain Futsal</li>
          <li>Bermain sepak bola</li>
          <li>Bermusik</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#2980b9' }}>Career Objective</h2>
        <p><strong>Goal:</strong> Menjadi orang sukses</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#2980b9' }}>Education</h2>
        <p><strong>University:</strong> Universitas Ma'soem</p>
        <p><strong>Major:</strong> Komputerisasi Akuntansi</p>
        <p><strong>Semester:</strong> 4</p>
      </div>

      <div style={{
        marginTop: '40px', 
        textAlign: 'center', 
        color: '#34495e'
      }}>
        <p>&copy; 2025 Rendi Maryandi - All Rights Reserved</p>
      </div>
    </div>
  );
}

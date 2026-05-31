import { useState } from 'react'

function BooleanState() {
  const [isVisible, setIsVisible] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [lightOn, setLightOn] = useState(false)
  const [accordionOpen, setAccordionOpen] = useState(false)

  const themeStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
    padding: '20px',
    minHeight: '200px',
    borderRadius: '8px',
  }

  return (
    <div style={themeStyle}>
      <h3>Bai 4.3 - useState boolean</h3>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'An noi dung' : 'Hien noi dung'}
      </button>
      {isVisible && (
        <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <p>Noi dung co the an/hien!</p>
        </div>
      )}
      <hr />
      <button type="button" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button type="button" onClick={() => setIsLiked(!isLiked)} style={{ marginLeft: '8px' }}>
        {isLiked ? 'Da thich' : 'Thich'}
      </button>
      <button type="button" onClick={() => setLightOn(!lightOn)} style={{ marginLeft: '8px' }}>
        {lightOn ? 'Den BAT' : 'Den TAT'}
      </button>
      <hr />
      <button type="button" onClick={() => setAccordionOpen(!accordionOpen)}>
        Accordion {accordionOpen ? '(dong)' : '(mo)'}
      </button>
      {accordionOpen && (
        <div style={{ marginTop: '8px', padding: '10px', background: '#f8fafc', borderRadius: '8px' }}>
          Noi dung accordion...
        </div>
      )}
    </div>
  )
}

export default BooleanState

function BadCounter() {
  let count = 0

  function handleClick() {
    count += 1
    console.log('Count:', count)
  }

  return (
    <div style={{ padding: '20px', border: '2px solid #ef4444', borderRadius: '8px' }}>
      <h3>Counter te (bien thuong)</h3>
      <p>Bo dem: {count}</p>
      <button type="button" onClick={handleClick}>Tang (+1)</button>
      <p style={{ color: 'red' }}>
        Nhan nut — Console tang nhung so tren man hinh KHONG doi!
      </p>
    </div>
  )
}

export default BadCounter

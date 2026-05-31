function PriceTag({ originalPrice, salePrice }) {
  const hasSale = salePrice < originalPrice

  return (
    <div style={{ padding: '8px' }}>
      {hasSale ? (
        <>
          <span style={{ textDecoration: 'line-through', color: '#94a3b8', marginRight: '8px' }}>
            {originalPrice.toLocaleString('vi-VN')}d
          </span>
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>
            {salePrice.toLocaleString('vi-VN')}d
          </span>
        </>
      ) : (
        <span style={{ fontWeight: 'bold' }}>{originalPrice.toLocaleString('vi-VN')}d</span>
      )}
    </div>
  )
}

export default PriceTag

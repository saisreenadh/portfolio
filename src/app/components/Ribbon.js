// The green ribbon on the right: hangs from the top of the page to 95% of its height,
// with a V-notch tail and one thin outline following its sides and notch.

const NOTCH = '7vh'
const OUTLINE_INSET = 12 // px in from the edge
const OUTLINE_WIDTH = 1 // px

// The ribbon shape, optionally inset by `i` px. The notch slope is about 0.47, so an inset
// line sits i * 1.1 px higher on the notch and i * 1.575 px higher at the bottom corners.
// Inset shapes start above the top edge so the outline has no line across the top.
const shape = (i = 0) =>
  i === 0
    ? `polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - ${NOTCH}), 0 100%)`
    : `polygon(${i}px -2px, calc(100% - ${i}px) -2px, calc(100% - ${i}px) calc(100% - ${i * 1.575}px), ` +
      `50% calc(100% - ${NOTCH} - ${i * 1.1}px), ${i}px calc(100% - ${i * 1.575}px))`

export default function Ribbon() {
  return (
    <div className="ribbon" style={{ clipPath: shape() }}>
      {/* The outline: a lighter inset copy of the shape, covered by a green copy 1px further in */}
      <div className="ribbon-line" style={{ clipPath: shape(OUTLINE_INSET) }} />
      <div className="ribbon-fill" style={{ clipPath: shape(OUTLINE_INSET + OUTLINE_WIDTH) }} />
    </div>
  )
}

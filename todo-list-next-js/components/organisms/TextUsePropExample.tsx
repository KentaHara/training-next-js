import { UseTextProp } from '../../modules/uses/useTextProp'
import PropTypes from 'prop-types'

type Prop = {
  textProp: UseTextProp
}

const TextUsePropExample = (prop: Prop) => {
  return (
    <div>
      <input type="text" value={prop.textProp.text} onChange={prop.textProp.onChangeText} />
    </div>
  )
}

TextUsePropExample.propTypes = {
  textProp: PropTypes.object,
}

export default TextUsePropExample

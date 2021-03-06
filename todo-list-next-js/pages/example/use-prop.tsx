import TextUsePropExample from '../../components/organisms/TextUsePropExample'
import { useTextProp } from '../../modules/uses/useTextProp'

const UseProp = () => {
  const textProp = useTextProp()

  return (
    <div style={{ padding: '12px' }}>
      <p>{textProp.text}</p>
      <input type="text" value={textProp.text} onChange={textProp.onChangeText} />
      <TextUsePropExample textProp={textProp} />
    </div>
  )
}

export default UseProp

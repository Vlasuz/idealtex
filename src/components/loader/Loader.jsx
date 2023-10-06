import { FallingLines } from  'react-loader-spinner'
import { LoaderStyle } from './Loader.styled'

export const Loader = () => {
  return (
    <LoaderStyle>
        <FallingLines
            color="#0069F4"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
        />
    </LoaderStyle>
  )
}

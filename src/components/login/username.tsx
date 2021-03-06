import * as React from 'react'

interface OwnProps {
  value: string,
  onChange: (username: string) => void,
}

const Username = (props: OwnProps) => {
  const {
    value,
  } = props

  const onChange = (e: React.FormEvent<{}>) => {
    const val = (e.target as HTMLInputElement).value
    return props.onChange(val)
  }

  return (
    <dl>
      <dt>{ 'ユーザー名' }</dt>
      <dd>
        <input
          type={ 'text' }
          value={ value }
          onChange={ onChange }
        />
      </dd>
    </dl>
  )
}

export default Username

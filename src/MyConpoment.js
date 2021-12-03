export const MyComponent = {
  props: {
    text: String
  },
  data: function() {
    return {
      i: 1
    }
  },
  render() {
    return (
      <div>
        <p>MyComponent: {this.text}</p>
        <div>
          <h1>{this.i === 1 ? 'True!' : 'False'}</h1>
        </div>
      </div>
      )
  },
}

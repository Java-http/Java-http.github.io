---
title: 04-ref
date: 2018-05-03 10:28:37
tags: 前端-05-react
categories: 前端-05-react
id : 1537686048562
---

```
var MyComponent = React.createClass({
  handleClick: function() {
    alert(this.myTextInput.value);
  },
  render: function() {
    return (
      <div>
        <input type="text" ref={(ref) => this.myTextInput = ref} />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});

ReactDOM.render(
  <MyComponent />,
  document.body
);
```
这里ref在设置的时候加上 ref={(ref)=>this.myTextInput=ref}
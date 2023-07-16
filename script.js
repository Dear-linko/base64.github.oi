// 获取页面上的元素
const inputText = document.getElementById("input-text");
const encodeButton = document.getElementById("encode-button");
const decodeButton = document.getElementById("decode-button");
const outputText = document.getElementById("output-text");
const copyOutputButton = document.getElementById("copy-output-button");
const copyOutputLabel = document.getElementById("copy-output-label");

// Base64 编码函数
function encodeBase64() {
  const input = inputText.value;
  const encodedText = btoa(input); // 使用 btoa 函数进行 Base64 编码
  outputText.value = encodedText;
}

// Base64 解码函数
function decodeBase64() {
  const input = inputText.value;
  const decodedText = atob(input); // 使用 atob 函数进行 Base64 解码
  outputText.value = decodedText;
}

// 复制输出结果按钮点击事件监听器
copyOutputButton.addEventListener("click", copyOutputText);

// 复制输出结果文本
function copyOutputText() {
  outputText.select();
  outputText.setSelectionRange(0, outputText.value.length);
  try {
    document.execCommand("copy");
    copyOutputLabel.textContent = "Successfully";
    setTimeout(() => {
      copyOutputLabel.textContent = "Copy Result";
    }, 1000);
  } catch (err) {
    alert("Failed：" + err);
  }
}

// 为编码和解码按钮添加点击事件监听器
encodeButton.addEventListener("click", encodeBase64);
decodeButton.addEventListener("click", decodeBase64);

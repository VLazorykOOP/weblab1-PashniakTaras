function sayHello() {
    alert("Hi, its JavaScript!");
}
// �������, ��� ���������� ��� ����������� �������
function onPageLoad() {
    alert("Page is loaded!");
}

// �������, ��� ���������� ��� ����� ����������� � �������
function onPageUnload() {
    alert("User is going out of page.");

// ������ �������� ��� ������
document.getElementById("unloadButton").onclick = function () {
    onPageUnload();
};
import React from "react";

const FindEmail = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone);
  };

  const onChangeName = useCallback((e) => {
    setName(e.target.name);
  }, []);

  const onChangePhone = useCallback((e) => {
    setPhone(e.target.phone);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>이메일 찾기</h2>
        <form onSubmit={onSubmit} className={styles.form} action="index.html">
          <div>
            <label htmlFor="user-email">이메일</label>
            <p>가입 시 입력하신 이름과 전화번호를 입력해 주세요.</p>
            <div>
              <input
                className={styles.input}
                placeholder="이름(본명)"
                name="user-name"
                value={name}
                required
                onChange={onChangeName}
              />
            </div>
            <div>
              <input
                className={styles.input}
                placeholder="전화번호"
                name="user-phone"
                value={phone}
                required
                onChange={onChangePhone}
              />
            </div>
            <div id={styles.buttons}>
              <button
                id={styles.signUpButton}
                htmltype="submt"
                onSubmit={onSubmit}
              >
                이메일 주소 찾기
              </button>
              <button id={styles.backButton}>닫기</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FindEmail;

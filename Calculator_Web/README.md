# Calculator JavaScript

## Calculation Flow of the Calculator

### 1. Situations for Each Button

#### 1) When the C (Clear) button is pressed:
   - Initialization
     - Always initialize, no other actions

#### 2) When an arithmetic operator (+, -, *, /) is pressed:
   - When the calculator is in its initial state (0) and an operator is pressed:
     - No response should be made.
   - When a number is pressed and then an operator is pressed (when the previous operation is not completed):
     - The calculator should be prepared for a new calculation. (Same as case 2-d)
   - When an operator is pressed after a number has been entered (additional operation after the previous operation is completed):
     - The previous operation should be completed, and the result should be displayed, acting as '='.
   - When a new operator is pressed while an operator is already pressed:
     - The previous operator should be canceled, and the new operator should replace it.
   - When the decimal point button is pressed:
     - The decimal point should be added only once.
   - If the number exceeds a certain digit, it should be displayed in exponential notation, and the font size should be adjusted accordingly.

#### 3) When the equal (=) button is pressed:
   - When the calculator is in its initial state (0) and an operator is pressed:
     - Initialization
   - When only the first operand is entered, and then the calculation button is pressed (when the previous operation is not completed):
     - No response should be made.
   - When only the first operand and an arithmetic operator are entered, and then the calculation button is pressed:
     - The second operand should be considered equal to the first operand, and the calculation should be completed.
   - When an operator is pressed after normal calculation:
     - Complete the calculation, display the result, and remember the result, operator, and second operand.
   - When the equal button is pressed after a calculation:
     - Recalculate the previous result with the previous operator and second operand, and display the result. (e.g., 2+3=5, pressing the equal button again should result in 5+3=8, and pressing it again should result in 8+3=11.)
   - Additional logic required for decimal point operations.

#### 4) For each number:
   - When a number is pressed while a value is displayed:
     - Initialize and then enter the pressed number.
   - When the '0' button is pressed while the display shows '0' (special case):
     - Initialization
   - No other special cases for numbers.

#### 5) Keyboard functionalities:
   - "C" button should be mapped to the Esc key on the keyboard, and other keys should function the same way.

#### 6) Percent functionality:
   - Refers to point 3)-f. for connecting with decimal point functionality.




<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>




Korean

# 계산기 Javascript

## 계산기의 계산 플로우

### 1. 버튼별 상황

####     1) C(초기화)를 눌렀을 때.
        a. 초기화
            ->  무조건 초기화, 이외 다른 상황 없음

####     2) 산술 연산자(+,-,*,/)를 눌렀을 때.
        a. 최초(0인) 상태에서 연산자를 눌렀을 때
            -> 아무 반응 없어야 한다.
        b. 최초 숫자를 누른 상태에서 연산자를 눌렀을 때 (이전 연산 미성립 시)
            -> 계산을 할 준비가 되어야 한다. (2-d. case 동일)
        c. 숫자를 누른 상태에서 연산자를 눌렀을 때 (이전 연산 성립 후 추가 연산 시)
            -> 이전 연산을 완료하여 결괏값 노출, '=' 과 같은 역할을 해주면 된다.
        c. 연산자를 이미 누른 상태에서 새로운 연산자를 눌렀을 때
            -> 이전 연산자를 취소하고 새로운 연산자로 교체한다.
        d. 계산을 완료한 상태에서 연산자를 눌렀을 때
            -> 계산을 할 준비가 되어야 한다. (2-b. case 동일)
        e. 소수점 클릭시 
            -> 소수점은 한번만 추가되어야한다.
        f. 특정 자리수 이상은 지수표기법으로 변환하여 표기 (+폰트사이즈 조절)

####     3) 할당 연산자(=)를 눌렀을 때.
        a. 최초(0)인 상태에서 연산자를 눌렀을 때
            -> 초기화
        b. 최초 1피연산자만 누른 상태에서 계산버튼을 눌렀을 때 (이전 연산 미성립 시)
            -> 아무 반응 없어야 한다.
        c. 최초 1피연산자 + 산술 연산자만 누른 상태에서 연산자를 눌렀을 때
            -> 2피연산자 = 1피연산자로 동일시하여 계산을 완료한다.
        d. 일반적인 계산 순서로 연산자를 눌렀을 때 (연산 성립시)
            -> 계산을 완료하고 결괏값, 연산자, 2피연산자를 기억한다.
        e. 계산 완료 후 또 다시 할당 연산자를 눌렀을 때
            -> 기존 결괏값에 이전 산술연산자와 이전 2피연산자를 다시 계산하여 결괏값에 표시한다. (예시. 2+3=5, 여기서 할당연산자를 다시 누르면 5+3=8이 되고, 또 누르면 8+3=11이 되도록 한다.)
      **f. 소수점 연산시 부동소수점 로직 추가 필요

####     4) 숫자별
        a. 화면노출값이 있는 상태에서 숫자를 눌렀을 때
             -> 초기화 후 누른 숫자 입력
        b. 0인 상태에서 숫자 0을 눌렀을 때 (특수)
            -> 초기화
        c. 나머지 특이사항 없음

####     5) 키보드 기능
        a. "C" 버튼을 키보드의 Esc로 사용하고 이외 키보드와 동일


####     6) 퍼센트 기능
        a. 3)-f, 부동소수점 기능 연계 참고




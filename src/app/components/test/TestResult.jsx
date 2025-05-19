  // 점수 계산
  const calculateScore = (dimension) => {
    let score1, score2, label1, label2;

    switch (dimension) {
      case 'E-I':
        score1 = scores.E;
        score2 = scores.I;
        label1 = 'E';
        label2 = 'I';
        break;
      case 'S-N':
        score1 = scores.S;
        score2 = scores.N;
        label1 = 'S';
        label2 = 'N';
        break;
      case 'T-F':
        score1 = scores.T;
        score2 = scores.F;
        label1 = 'T';
        label2 = 'F';
        break;
      case 'J-P':
        score1 = scores.J;
        score2 = scores.P;
        label1 = 'J';
        label2 = 'P';
        break;
      default:
        return { score: 50, label1: '', label2: '' };
    }

    const total = score1 + score2;
    const percentage = total > 0 ? Math.round((score1 / total) * 100) : 50;

    // 점수는 항상 왼쪽 값(score1)의 비율을 반환
    // ScoreBar 컴포넌트에서 이 값을 기준으로 색상 방향을 결정
    return { score: percentage, label1, label2 };
  };
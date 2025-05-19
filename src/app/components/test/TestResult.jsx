                {/* 점수 분석 섹션 */}
                <Box sx={{ mb: 4 }}>
                  <DescriptionTitle variant="h5" sx={{
                    textAlign: 'center',
                    mb: 2,
                    color: 'secondary.main',
                    fontSize: '1.5rem',
                    borderBottom: '2px solid',
                    borderColor: 'secondary.main',
                    pb: 1
                  }}>
                    점수 분석
                  </DescriptionTitle>

                  <Typography variant="body1" sx={{ mb: 3 }}>
                    당신의 MBTI 성향 점수 분석입니다. 각 차원에서 어느 쪽에 더 가까운지 확인해보세요.
                  </Typography>

                  {['E-I', 'S-N', 'T-F', 'J-P'].map((dimension, index) => {
                    const { score, label1, label2 } = calculateScore(dimension);
                    const leftScore = score;
                    const rightScore = 100 - score;
                    
                    // 왼쪽이 더 높은지 오른쪽이 더 높은지 확인
                    const isLeftHigher = leftScore >= rightScore;

                    return (
                      <AnimatedElement
                        key={dimension}
                        animation="slideRight"
                        duration="normal"
                        delay={index * 150}
                      >
                        <Box sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" fontWeight={isLeftHigher ? 'bold' : 'normal'}>
                              {label1}
                            </Typography>
                            <Typography variant="body2" fontWeight={!isLeftHigher ? 'bold' : 'normal'}>
                              {label2}
                            </Typography>
                          </Box>

                          <ScoreBarContainer>
                            {isLeftHigher ? (
                              <LeftScoreBar 
                                dimension={dimension} 
                                width={leftScore}
                              >
                                {leftScore}%
                              </LeftScoreBar>
                            ) : (
                              <Box sx={{ width: `${leftScore}%` }} />
                            )}
                            
                            {!isLeftHigher ? (
                              <RightScoreBar 
                                dimension={dimension} 
                                width={rightScore}
                              >
                                {rightScore}%
                              </RightScoreBar>
                            ) : (
                              <Box sx={{ width: `${rightScore}%` }} />
                            )}
                          </ScoreBarContainer>

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                            <Typography variant="caption" color="text.secondary">
                              {dimension === 'E-I' ? '외향적' :
                               dimension === 'S-N' ? '현실적' :
                               dimension === 'T-F' ? '논리적' : '계획적'}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {dimension === 'E-I' ? '내향적' :
                               dimension === 'S-N' ? '직관적' :
                               dimension === 'T-F' ? '감성적' : '즉흥적'}
                            </Typography>
                          </Box>
                        </Box>
                      </AnimatedElement>
                    );
                  })}
                </Box>

                <Divider sx={{ my: 4 }}